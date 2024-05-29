"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DragDropPhoto from "@/components/ui/drag-drop-photo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { postRequest } from "@/hook/apiClient";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import DragDropVideo from "@/components/ui/drag-drop-video";

const AddVideos = (props: any) => {
  const [type, setType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<any>([]);
  const [urlVideo, setURLVideo] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const openDialog = (type: string) => {
    setType(type);
    setOpen(true);
  };

  const handleVideo = () => {
    setLoading(true);
    let arr: any = props.videos;
    let arrUrl: any = [...props.videos];
    arr.push({
      title: title,
      description: description,
      path: images[0],
    });
    arrUrl.unshift({
      title: title,
      description: description,
      path: urlVideo,
    });
    const payload = {
      video: arr,
    };
    postRequest("/user/company-update", payload)
      .then(() => {
        props.setVideos(arrUrl);
        toast({
          variant: "success",
          title: "Success",
          description: "Update Video Success",
        });
        // props.setReload((prev: any) => !prev);
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Fail",
          description: "Update Video",
        });
      })
      .finally(() => {
        setImages([]);
        setLoading(false);
        setOpen(false);
        setTitle("");
        setDescription("");
      });
  };
  const handleCancel = () => {
    setIsOpen(false);

    setTitle("");
    setDescription("");
    setImages([]);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Add Video {">"}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[120px] font-normal text-black text-base">
            <DropdownMenuItem onClick={() => openDialog("video")}>
              <div>Add video</div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => openDialog("link")}>
              <div>Add link</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DialogTrigger>
      <DialogContent className="min-w-[90%] md:min-w-[30%] !w-1/2 !max-w-[90%] md:max-w-[30%]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Add Video</DialogTitle>
        </DialogHeader>
        <div className="py-4 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Label>
              Title <span className="text-red-500">*</span>
            </Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
            />
          </div>
          {type === "video" ? (
            <div className="flex flex-col gap-2">
              <Label>
                Video <span className="text-red-500">*</span>
              </Label>
              <DragDropVideo
                img={images}
                setImg={setImages}
                setURLVideo={setURLVideo}
                multiple={false}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Label>
                Video URL <span className="text-red-500">*</span>
              </Label>
              <Input
                value={images[0]}
                onChange={(e) => {
                  setImages([e.target.value]);
                  setURLVideo(e.target.value)
                }}
                placeholder="Paste URL to Youtube or Vimeo video"
              />
              <Label className="text-sm">
                If you already have a video on YouTube or Vimeo, you can paste
                the URL to the video here.
              </Label>
            </div>
          )}
        </div>
        <DialogFooter className="sm:justify-end">
          <div className="flex gap-3 justify-end">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="border border-black"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </DialogClose>
            {loading ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button variant="default" onClick={handleVideo}>
                Confirm
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AddVideos;
