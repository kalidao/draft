import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { ModelSelector } from "@/components/model-selector"
import { SettingsIcon } from "lucide-react"
import { TemperatureSelector } from "@/components/temperature-selector"
import { models, types, Model } from "@/lib/models"

interface SettingProps {
    model?: Model,
}

export const SettingsDialog = ({
    model
}: SettingProps) => {
return (
    <Dialog>
        <DialogTrigger className="mr-2">
            <SettingsIcon />
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
                Adjust your preferences and settings here.
            </DialogDescription>
            </DialogHeader>
            <ModelSelector types={types} models={models} />
            <TemperatureSelector defaultValue={[0.1]} />
        </DialogContent>
    </Dialog>
    )
}
          