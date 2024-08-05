'use client'
import ThemeToggle from "@/components/theme-toggle";
import Link from 'next/link';
import { useState } from "react";
import isUrl from "@/lib/isUrl";
import generateShortLink from "@/api/generateShortLink";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [longLink, setLongLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [isError, setIsError] = useState(false);

  function handleChange(event: any) {
    setIsError(false);
    setLongLink(event.target.value);
  }

  async function generateLink() {
    if(isUrl(longLink)) {
      setIsError(false);
      setLoading(true);
      const data = await generateShortLink(longLink);
      if(data == null) {
        setLoading(false);
        // @ts-ignore
        document.getElementById('showError').showModal();
      }
      else {
        // console.log(data.shortLink);
        setLoading(false);
        setShortLink(data.shortLink);
        // @ts-ignore
        document.getElementById('showShortLink').showModal();
      }
    }
    else {
      setIsError(true);
    }
  }

  async function copyShortLink() {
    navigator.clipboard.writeText(shortLink).then(() => {
      // TODO 复制成功
    });
    setShortLink("");
  }

  return (
    <main className="m-0 min-h-screen min-w-screen box-border flex flex-col items-center">
      <div className="md:w-full max-w-xl flex flex-col items-center mt-20 w-11/12">
        <div className="join w-full justify-between">
          <input className="input input-bordered join-item w-full focus:outline-none mr-[1px]" value={longLink}  onChange={handleChange} placeholder="Type long link here..." />
            {
              loading == false &&
              <button className="btn no-animation rounded-l-none rounded-r-lg" onClick={ generateLink }>Generate</button>
            }
            { 
              loading == true &&
              <button className="btn btn-disabled no-animation rounded-l-none rounded-r-lg">
                <span className="loading loading-spinner"></span>
                Generate
              </button>
            }
          <dialog id="showShortLink" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg select-none">
                Successful!
              </h3>
              <p className="break-all pv-4 mt-[10px] mb-[5px]">
                { shortLink }
              </p>
              <div className="modal-action mt-[10px]">
                <form method="dialog">
                  <button className="btn" onClick={copyShortLink}>Copy!</button>
                </form>
              </div>
            </div>
          </dialog>
          <dialog id="showError" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg select-none">
                Error
              </h3>
              <p className="break-all pv-4 mt-[10px] mb-[5px]">
                Internal server error.
              </p>
              <div className="modal-action mt-[10px]">
                <form method="dialog">
                  <button className="btn" onClick={copyShortLink}>Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        {
          isError &&         
          <span className="w-full label-text-alt flex flex-row mt-[10px] justify-start text-error">
            Error: input link start with http or https pls.
          </span>
        }
        <span className="w-full label-text-alt flex flex-row mt-[10px] justify-start">
          <span className="hover:underline hover:cursor-pointer flex flex-row items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-4 h-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path></svg><Link href="/help">What&apos;s this?</Link></span>
          &nbsp;|&nbsp;<a target="_blank" href="https://github.com/maodaisuki/link" className="link link-hover">Github</a>
          &nbsp;|&nbsp;<Link href="/api/docs" className="link link-hover">API</Link>
          &nbsp;|&nbsp;
          <ThemeToggle />
        </span>
      </div>
    </main>
  );
}
