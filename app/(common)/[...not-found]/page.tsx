import React from "react";

const Notfound = async () => {
    return (
        <div>
            <div className="w-full flex justify-center h-[60vh]">
                <div className="flex flex-col items-center justify-center py-36">
                    <img
                        src="/404-error.png"
                        alt="404-error"
                        className="w-64 aspect-square"
                    />
                    <span className="text-4xl font-bold">Page not found!</span>
                </div>
            </div>
        </div>
    );
};

export default Notfound;
