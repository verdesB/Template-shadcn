import * as React from "react"
import {
    AlertCircle,
    Archive,
    ArchiveX, Calendar,
    File, Home,
    Inbox, MessageSquarePlus,
    MessagesSquare,
    PenBox,
    Search,
    Send,
    ShoppingCart,
    Trash2,
    Users2,
    Link2
} from "lucide-react"
import {Nav} from "./Nav";
import { cn } from "./utils/cn"
import { Separator } from "./Separator"
import { Input } from "./Input"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./Tabs"
import { TooltipProvider } from "./Tooltip"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./Resizable"
import logo from './assets/logo.png'
import {useEffect, useRef} from "react";
import {ImperativePanelHandle} from "react-resizable-panels";

const MailTest = () => {


    const [isCollapsed, setIsCollapsed] = React.useState(false)
    console.log(isCollapsed)

    return (
        <ResizablePanelGroup direction="horizontal" className="h-full items-stretch">
            <ResizablePanel  minSize={5} maxSize={20} style={{minWidth: '70px'}}
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
                                 title: isCollapsed ? "" : "Dashboard",
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
                                 icon: Home,
                                 variant: "ghost",
                             },
                             {
                                 title: "Créer un article ",
                                 label: "",
                                 icon: Calendar,
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