import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component{
    state={Language:"english"};
    onLanguageChange=(Language)=>{
        this.setState({Language});
    }
    render(){
        return(
            <div className="ui container">
                Select a Language:
                <i className="flag us" onClick={()=> this.onLanguageChange('english')} />
                <i className="flag pk" onClick={()=> this.onLanguageChange('urdu')} />
                <LanguageContext.Provider value={this.state.Language}>
                    <UserCreate/>
                </LanguageContext.Provider>

            </div>
        );
    }
}
export default App;