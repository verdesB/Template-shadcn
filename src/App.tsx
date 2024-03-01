import React from 'react';

import './App.css';

import MailTest from "./MailTest";
// import Cookies from "js-cookie";


function App() {
    // const layout = Cookies.get('react-resizable-panels:layout');
    // const collapsed = Cookies.get('react-resizable-panels:collapsed');
    //
    // const defaultLayout = layout ? JSON.parse(layout) : undefined;
    // const defaultCollapsed = collapsed ? JSON.parse(collapsed) : undefined;
    // const layout = Cookies.get('react-resizable-panels:layout');
    // const collapsed = Cookies.get('react-resizable-panels:collapsed');
    //
    // let defaultLayout, defaultCollapsed;
    //
    // if (layout) {
    //     try {
    //         defaultLayout = JSON.parse(layout);
    //     } catch (error) {
    //         console.error('Error parsing layout:', error);
    //     }
    // }
    // console.log('Before parsing collapsed');
    // if (collapsed) {
    //     try {
    //         console.log('Trying to parse collapsed');
    //         console.log(collapsed)
    //         defaultCollapsed = JSON.parse(collapsed);
    //         console.log('Successfully parsed collapsed');
    //     } catch (error) {
    //         console.error('Error parsing collapsed:', error);
    //     }
    // }
    // console.log('After parsing collapsed');
  return (
    <div className="App" style={{height: '100vh'}}>
      <MailTest
          // defaultLayout={defaultLayout}
          //    defaultCollapsed={defaultCollapsed}
            />
    {/*    <Mail*/}
    {/*         defaultLayout={defaultLayout} navCollapsedSize={4}>*/}
    {/*    */}
    {/*</Mail>*/}
    </div>
  );
}

export default App;
