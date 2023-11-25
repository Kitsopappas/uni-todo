import rootReducer from './rootReducer';

type IAppReducer = typeof rootReducer;

const appReducer: IAppReducer = (state, action) => {
    return rootReducer(state, action);
  };
  
  export default appReducer;
  