import * as React from "react"
import {
     Calendar,
     Home,
     MessageSquarePlus,
    Link2, PencilRuler, SquarePen
} from "lucide-react"
import {Nav} from "./Nav";
import { cn } from "./utils/cn"
import { Separator } from "./Separator"
import { TooltipProvider } from "./Tooltip"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./Resizable"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './assets/logo.png'
import {PanelOnCollapse} from "react-resizable-panel";




const MailTest = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false)
    console.log(isCollapsed)

    return (
        <ResizablePanelGroup direction="horizontal" className="h-full items-stretch">
            {/*<ResizablePanel minSize={7}  style={{minWidth: '70px', maxWidth: '270px'}}*/}
            {/*                 collapsible={true}  onCollapse={(collapsed: boolean): any => {*/}
            {/*    console.log('onCollapse called with:', isCollapsed);*/}
            {/*    setIsCollapsed(true);*/}


            {/*}} onExpand={() => {*/}
            {/*    console.log('onExpand called');*/}
            {/*    setIsCollapsed(false);*/}
            {/*}}>*/}
                <ResizablePanel minSize={7}  style={{minWidth: '70px', maxWidth: '270px'}}
                                onExpand={() => {
                                    setIsCollapsed(false)
                                }}
                                collapsible={true}  onCollapse={((collapsed: boolean) => {
                    console.log('onCollapse called with:', isCollapsed);
                    setIsCollapsed(true);
                }) as PanelOnCollapse}
                >
                <TooltipProvider delayDuration={0}>
                <div style={{backgroundColor: '#1b202c'}} className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]' : 'px-2')}>
                   <img src={logo} style={{objectFit: 'cover',height: '100%'}}/>
                </div>
                <Separator className={"bg-gray-500"} />
                <div style={{backgroundColor: '#1b202c', height: '100%', width: '100%',boxSizing: 'border-box'}}>
                    <Nav
                        isCollapsed={isCollapsed}
                         links={[
                             {
                                 title:  "Dashboard",
                                 label: "",
                                 icon: Home,
                                 variant: "default",
                                 href: "/"
                             },
                             {
                                 title: "Calendrier éditorial",
                                 label: "",
                                 icon: Calendar,
                                 variant: "ghost",
                                 href: "/calendrier-éditorial"
                             },
                             {
                                 title: "Création de post",
                                 label: "",
                                 icon: MessageSquarePlus,
                                 variant: "ghost",
                                 href: "/creation-de-post"
                             },
                             {
                                 title: "Gestion des comptes",
                                 label: "",
                                 icon: Link2,
                                 variant: "ghost",
                                 href: "gestion-des-comptes"
                             },

                         ]}></Nav>
                    <Separator style={{boxSizing: 'border-box', width: '80%',margin: '0 auto'}} />
                    <Nav
                        isCollapsed={isCollapsed}
                         links={[
                             {
                                 title: "Creation de page Web",
                                 label: "",
                                 icon: PencilRuler,
                                 variant: "ghost",
                             },
                             {
                                 title: "Créer un article ",
                                 label: "",
                                 icon: SquarePen,
                                 variant: "ghost",

                             },


                         ]}></Nav>
                </div>
                </TooltipProvider>
            </ResizablePanel>
            <ResizableHandle withHandle/>
            <ResizablePanel minSize={70}>
                <div className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]' : 'px-2')}>
                    <Router>
                    <Routes>
                        <Route path="/calendrier-éditorial" element={<p> calendar</p>} />
                        <Route path="/creation-de-post" element={<p> post</p>} />
                        <Route path="/gestion-des-comptes" element={<p> compte</p>} />
                    </Routes>
                    </Router>
                </div>

                <Separator/>
                <Router>
                    <Routes>
                        <Route path="/calendrier-éditorial" element={<p> calendar bottom</p>} />
                        <Route path="/creation-de-post" element={<p> post bottom</p>} />
                        <Route path="/gestion-des-comptes" element={<p> compte bottom</p>} />
                    </Routes>
                </Router>
            </ResizablePanel>
            <ResizableHandle withHandle/>
            <ResizablePanel>
                <div
                    className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]' : 'px-2')}>
                    <Router>
                        <Routes>
                            <Route path="/calendrier-éditorial" element={<div style={{  overflowX: 'hidden', whiteSpace: 'nowrap'}}><p> calendar volet top droit</p></div>} />
                            <Route path="/creation-de-post" element={<div style={{  overflowX: 'hidden', whiteSpace: 'nowrap'}}>
                                <p> post volet top droit</p></div>} />
                                <Route path="/gestion-des-comptes" element={<div style={{  overflowX: 'hidden',whiteSpace: 'nowrap'}}>
                                    <p> comptes volet top droit</p></div>} />
                                </Routes>
                                    </Router>
                                    </div>
                <Separator/>
                <Router>
                    <Routes>
                        <Route path="/calendrier-éditorial" element={<div style={{  overflowX: 'hidden', whiteSpace: 'nowrap'}}>
                            <p> calendar volet bottom droit</p></div>} />
                            <Route path="/creation-de-post" element={<div style={{  overflowX: 'hidden', whiteSpace: 'nowrap'}}>
                                <p> post volet bottom droit</p></div>} />
                                <Route path="/gestion-des-comptes" element={<div style={{  overflowX: 'hidden', whiteSpace: 'nowrap'}}>
                                    <p> compte volet bottom droit</p></div>} />
                                </Routes>
                                    </Router>
                                    </ResizablePanel>

        </ResizablePanelGroup>
    )
}
export default MailTest