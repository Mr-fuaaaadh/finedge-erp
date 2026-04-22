import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface ModalFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  onSubmit?: () => void;
  onCancel?: () => void;
  submitLabel?: string;
  cancelLabel?: string;
  loading?: boolean;
  destructive?: boolean;
  "data-ocid"?: string;
}

export function ModalForm({
  open,
  onOpenChange,
  title,
  description,
  children,
  onSubmit,
  onCancel,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  loading = false,
  destructive = false,
  "data-ocid": dataOcid,
}: ModalFormProps) {
  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-ocid={dataOcid ? `${dataOcid}.dialog` : "modal.dialog"}
        className="rounded-2xl w-[calc(100vw-2rem)] max-w-lg mx-auto max-h-[90dvh] flex flex-col overflow-hidden"
      >
        <DialogHeader className="shrink-0">
          <DialogTitle className="font-display text-base sm:text-lg">
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="flex-1 overflow-y-auto py-2 pr-1 scrollbar-thin">
          {children}
        </div>
        <DialogFooter className="shrink-0 flex-col-reverse sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={handleCancel}
            disabled={loading}
            className="w-full sm:w-auto"
            data-ocid={
              dataOcid ? `${dataOcid}.cancel_button` : "modal.cancel_button"
            }
          >
            {cancelLabel}
          </Button>
          {onSubmit && (
            <Button
              variant={destructive ? "destructive" : "default"}
              onClick={onSubmit}
              disabled={loading}
              className="w-full sm:w-auto"
              data-ocid={
                dataOcid ? `${dataOcid}.submit_button` : "modal.submit_button"
              }
            >
              {loading && (
                <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
              )}
              {submitLabel}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
