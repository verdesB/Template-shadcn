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
import logo from './assets/logo.png'


const MailTest = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false)
    console.log(isCollapsed)

    return (
        <ResizablePanelGroup direction="horizontal" className="h-full items-stretch">
            <ResizablePanel minSize={7}  style={{minWidth: '70px', maxWidth: '270px'}}
                             collapsible={true}  onCollapse={(collapsed) => {
                console.log('onCollapse called with:', isCollapsed);
                setIsCollapsed(true);
            }} onExpand={() => {
                console.log('onExpand called');
                setIsCollapsed(false);
            }}>
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
                             },
                             {
                                 title: "Calendrier éditorial",
                                 label: "",
                                 icon: Calendar,
                                 variant: "ghost",
                             },
                             {
                                 title: "Création de post",
                                 label: "",
                                 icon: MessageSquarePlus,
                                 variant: "ghost",
                             },
                             {
                                 title: "Gestion des comptes",
                                 label: "",
                                 icon: Link2,
                                 variant: "ghost",
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
                <div
                     className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]' : 'px-2')}>

                </div>
                <Separator/>
            </ResizablePanel>
            <ResizableHandle withHandle/>
            <ResizablePanel>
                <div
                    className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]' : 'px-2')}>

                </div>
                <Separator/>
            </ResizablePanel>

        </ResizablePanelGroup>
    )
}
export default MailTest