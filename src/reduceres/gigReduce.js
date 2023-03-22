export const INITIAL_STATE = {
  title: "",
  cat: "",
  cover: "",
  images: [],
  desc: "",
  shortTitle: "",
  shortDesc: "",
  deliveryTime: 0,
  revisionNumber: 0,
  addFeatures: [],
  price: 0,
};

export const gigReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_INPUTS" :
            return {
            ...state, [action.payload.name]: action.payload.value
        }

        case "IMAGES_CHANGE":
            return {
                ...state,
                cover: action.payload.cover,
                images: action.payload.images,
            }
        
        case "ADD_FEATURES": 
            return {
              ...state,
              addFeatures: [...state.addFeatures, action.payload],
            };

        case "REMOVE_FEATURES": 
            return {
              ...state,
              addFeatures: state.addFeatures.filter(
                (feature) => feature !== action.payload
              ),
            };
    }
}