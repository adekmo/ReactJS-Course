
// state = nilai, action=apa yg ingin dilakukan, action harus memiliki TYPE
export const Reducer = (state, action) => {
    
    if(action.type === 'ADD_ITEM'){
        const newPeople = [ ...state.people, action.payload ]
        return {...state, people: newPeople, show: true, isiModal: 'Berhasil ditambahkan'}
    }
    if(action.type === 'KOSONG'){
        return { ...state, show: true, isiModal: 'isikan nama'}
    }
    if(action.type === 'CLOSE_MODAL'){
        return { ...state, show: false}
    }
    if(action.type === 'HAPUS'){
        const newPeople = state.people.filter((p) => p.id !== action.payload)
        return { ...state, people: newPeople }
    }
    // harus ada return
    throw new Error ('tidak ada action type')

}

