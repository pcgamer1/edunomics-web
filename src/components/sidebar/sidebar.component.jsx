import React from 'react'
import Sidebar from 'react-sidebar'

class SideBar extends React.Component {

    state = {sidebarOpen: true}

    onSetSidebarOpen = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen})
    }

    render() {
        return (
          <Sidebar
            sidebar={<b>Sidebar content</b>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
          >
            <button onClick={() => this.onSetSidebarOpen()}>
              Open sidebar
            </button>
          </Sidebar>
        );
      }
}

export default SideBar