import React from 'react';
import { Link } from 'react-router-dom';
class SuggessionSite extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
                <div className="suggession-box site">
                    <div className="row">
                        <div className="col-md-6">
                            <a className="dropdown-item">Save</a>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
                )
    }
}
class SuggessionTools extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
                <div className="suggession-box tools">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Toolbar</label>
                            <label>Ruler</label>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
                )
    }
}
class SuggessionHelp extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
                <div className="suggession-box tools">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Editor help center</label>
                           
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
                )
    }
}


class SuggessionCode extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
                <div className="suggession-box code">
                    <div className="row">
                        <div className="col-md-12">
                           Panda Code Beta
                        </div>
                    </div>
                </div>
                )
    }
}
class SuggessionUpgrade extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
                <div className="suggession-box code">
                    <div className="row">
                        <div className="col-md-12">
                           Upgrade to yearly pro package
                        </div>
                    </div>
                </div>
                )
    }
}
class PageDropDown extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
                <div className="dropdown">
                    <a className="dropdown-item">About Us</a>
                    <a className="dropdown-item">Contact Us</a>
                    <a className="dropdown-item">Terms and Conditions</a>
                </div>
                )
    }
}
class Header extends React.Component {
   constructor() {
    super();
    this.state = {
      showSuggession: false,
      showPageDropDown: false,
      showSuggessionTools: false,
      showSuggessionCode: false,
      showSuggessionHelp: false,
      showSuggessionUpgrade: false
    }
  }
    
    render() {
        function publishProject(e) {
            e.preventDefault();
            console.log('publishProject clicked.');
        }
        function previewProject(e) {
            e.preventDefault();
            console.log('previewProject clicked.');
        }
        function saveProject(e) {
            e.preventDefault();
            console.log('saveProject clicked.');
        }
        function mobileView(e) {

        }
        function undoTask() {

        }
        function redoTask() {

        }
        function megnifyScreen() {}
        function showDropDown() {
            if(this.state.showPageDropDown){
                this.setState({showPageDropDown: false})
            }else{
                this.setState({showPageDropDown: true})
            }
        }
        function showSuggessionSite() {
            this.setState({showSuggession: true})
        }
        function hideSuggessionSite() {
            this.setState({showSuggession: false})
        }
        function showSuggessionTools() {
            this.setState({showSuggessionTools: true})
        }
        function hideSuggessionTools() {
            this.setState({showSuggessionTools: false})
        }
        function showSuggessionCode() {
            this.setState({showSuggessionCode: true})
        }
        function hideSuggessionCode() {
            this.setState({showSuggessionCode: false})
        }
        function showSuggessionHelp() {
            this.setState({showSuggessionHelp: true})
        }
        function hideSuggessionHelp() {
            this.setState({showSuggessionHelp: false})
        }
        function showSuggessionUpgrade() {
            this.setState({showSuggessionUpgrade: true})
        }
        function hideSuggessionUpgrade() {
            this.setState({showSuggessionUpgrade: false})
        }
        return (
                <nav className="navbar navbar-light">
                    <Link to="/" className="navbar-brand">
                    {this.props.appName.toLowerCase()}
                    </Link>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            <div className="dropdown" onClick={showDropDown.bind(this)}>
                                <button className="btn dropdown-toggle">
                                    Page: Home
                                </button>
                                {this.state.showPageDropDown && < PageDropDown / >}
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="suggession" onMouseEnter={showSuggessionSite.bind(this)} onMouseLeave={hideSuggessionSite.bind(this)}>
                                <button className="btn">
                                    Site
                                </button>
                                {this.state.showSuggession && < SuggessionSite / >}
                            </div>
                        </li>
                        <li className="nav-item">
                           <div className="suggession" onMouseEnter={showSuggessionTools.bind(this)} onMouseLeave={hideSuggessionTools.bind(this)}>
                                <button className="btn">
                                    Tools
                                </button>
                                {this.state.showSuggessionTools && < SuggessionTools / >}
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="suggession" onMouseEnter={showSuggessionCode.bind(this)} onMouseLeave={hideSuggessionCode.bind(this)}>
                                <button className="btn">
                                    Code
                                </button>
                                {this.state.showSuggessionCode && < SuggessionCode / >}
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="suggession" onMouseEnter={showSuggessionHelp.bind(this)} onMouseLeave={hideSuggessionHelp.bind(this)}>
                                <button className="btn">
                                    Help
                                </button>
                                {this.state.showSuggessionHelp && < SuggessionHelp / >}
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="suggession" onMouseEnter={showSuggessionUpgrade.bind(this)} onMouseLeave={hideSuggessionUpgrade.bind(this)}>
                                <button className="btn">
                                    Upgrade
                                </button>
                                {this.state.showSuggessionUpgrade && < SuggessionUpgrade / >}
                            </div>
                        </li>
                        <li className="nav-item">
                            <button onClick={megnifyScreen}>
                                Megnifier
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={redoTask}>
                                Redo
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={undoTask}>
                                Undo
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={mobileView}>
                                Mobile
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={saveProject}>
                                Save
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={previewProject}>
                                Preview
                            </button>
                        </li>
                
                        <li className="nav-item">
                            <button onClick={publishProject}>
                                Publish
                            </button>
                        </li>
                
                    </ul>
                </nav>
                );
    }
}

export default Header;
