export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_ITEM': {
      const newPeople = [...state.pepole, payload];
      return {
        ...state,
        pepole: newPeople,
        isModelOpen: true,
        modalContent: 'item added'
      };
    }
    case 'NO_VALUE': {
      return {
        ...state,
        isModelOpen: true,
        modalContent: 'please enter a value'
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        isModelOpen: false
      }
    }
    case "REMOVE_ITEM": {
      const newPeople = state.pepole.filter((person) => person.id !== payload);
      return {
        ...state,
        pepole: newPeople,
        isModelOpen: true,
        modalContent: 'ITEM Deleted'

      }
    }
    default:
      throw new Error(' no matchinh action type');
    //return state;

  }
}