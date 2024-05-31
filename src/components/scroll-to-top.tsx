"use client";
import { Fragment, useEffect, useState } from "react"
import { Rocket } from "lucide-react";

export default function ScrollToTopBtn() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    });

    const jumpToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <Fragment>
            {
                (show) ? (
                    <div className="fixed bottom-0 right-0 mb-14 mr-6 z-30">
                    <button onClick={jumpToTop} className="bg-black opacity-7 text-white rounded-full p-2 hover:bg-gray-900 transition" aria-label="Scroll to top">
                        <Rocket className=" -rotate-45 text-primary-1"/>
                    </button>
                </div>
                ) : (<Fragment/>)
            }
        </Fragment>
    )
}