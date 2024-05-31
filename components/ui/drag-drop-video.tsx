'use client'
import { useState, useRef } from "react";
import { postRequestWithFormData } from "@/hook/apiClient";
import { useToast } from "./use-toast";


const DragDropVideo = ({ img, setImg, multiple, setURLVideo }: any) => {
  const [loading, setLoading] = useState(false);
  const uploadFileRef = useRef<HTMLInputElement>(null);
  const [url, setURL] = useState(); 
  const { toast } = useToast();


  const changeFile = (event: any) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append(`file[0]`, event.target.files[0]);

    postRequestWithFormData("/file/upload-file-user", formData)
      .then((data) => {

        setImg([data?.data[0].file_name]);
        setURL(data?.data[0].file_url);
        setURLVideo(data?.data[0].file_url.replace("temp_file", "media"));
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Fail!",
          description: JSON.parse(err.request.response).message?JSON.parse(err.request.response).message:"Something went wrong!",
        });
      })
      .finally(() => setLoading(false));
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    const files = event.dataTransfer.files;
    formData.append(`file`, files[0]);

    postRequestWithFormData("/file/upload-file-user", formData)
      .then((data) => {
        setImg([data?.data.file_name]);
        setURL(data?.data[0].file_url);
        setURLVideo(data?.data[0].file_url);
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Fail!",
          description: JSON.parse(err.request.response).message?JSON.parse(err.request.response).message:"Something went wrong!",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div
        className="border border-dashed border-primary flex justify-center items-center py-[24px] text-black"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {img.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-2">
            <input
              type="file"
              onChange={(event) => changeFile(event)}
              hidden
              multiple={multiple}
              ref={uploadFileRef}
            />
            {loading ? (
              <div className="text-[20px] leading-[24px] hover:underline cursor-pointer">
                Uploading...
              </div>
            ) : (
              <div
                className="text-[20px] leading-[24px] hover:underline cursor-pointer"
                onClick={() => uploadFileRef.current && uploadFileRef.current.click()}
              >
                Add Cover Videos
              </div>
            )}
            <div className="text-[#939AA1] text-[20px] text-center">
              or drop video file to upload
            </div>
          </div>
        ) : (
          <div className="px-4 flex justify-center items-center">
            <video controls className="w-3/4 aspect-video">
              <source src={url} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragDropVideo;
