import { Icon } from "@iconify/react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
function Emails(){
    return(
        <>
        <div>
            <div className="row">
                <div className="col-lg-3">
                    <div className="card border-none pt-3 pb-3 height-100">
                        <div className="d-flex flex-row mb-2 align-items-center color-primary px-2 w-100 justify-content-start gap-3">
                            <span><Icon icon="clarity:email-line" className="fs-4"/></span>
                        <h5 className=" fw-bold my-0">Emails</h5>
                        </div>
                      <div className="d-flex flex-row align-items-center justify-content-between my-1 primary-background-50 color-primary mx-1 py-2 rounded-2 font">
                        <div className="d-flex align-items-center gap-3 flex-row ps-3 fw-medium font-size-sm">
                          <span className="fs-6"><Icon icon="solar:inbox-broken" /></span>
                          <span>Inbox</span>
                        </div>
                        <div className="pe-3">
                            <span className="font-size-sm fw-medium">230</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-between my-1  mx-1 py-2 rounded-2 font">
                        <div className="d-flex align-items-center gap-3 flex-row ps-3 gainsboro-color font-size-sm">
                          <span className="fs-6"><Icon icon="material-symbols:draft-outline" /></span>
                          <span>Draft</span>
                        </div>
                        <div className="pe-3">
                            <span className="font-size-sm">230</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-between my-1  mx-1 py-2 rounded-2 font">
                        <div className="d-flex align-items-center gap-3 flex-row ps-3 gainsboro-color font-size-sm">
                          <span className="fs-6"><Icon icon="hugeicons:sent" /></span>
                          <span>Sent</span>
                        </div>
                        <div className="pe-3">
                            <span className="font-size-sm">230</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-between my-1  mx-1 py-2 rounded-2 font">
                        <div className="d-flex align-items-center gap-3 flex-row ps-3 gainsboro-color font-size-sm">
                          <span className="fs-6"><Icon icon="ion:trash-bin-outline" /></span>
                          <span>Junk</span>
                        </div>
                        <div className="pe-3">
                            <span className="font-size-sm">230</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-between my-1  mx-1 py-2 rounded-2 font">
                        <div className="d-flex align-items-center gap-3 flex-row ps-3 gainsboro-color font-size-sm">
                          <span className="fs-6"><Icon icon="tabler:trash" /></span>
                          <span>Trash</span>
                        </div>
                        <div className="pe-3">
                            <span className="font-size-sm">230</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-between my-1  mx-1 py-2 rounded-2 font">
                        <div className="d-flex align-items-center gap-3 flex-row ps-3 gainsboro-color font-size-sm">
                          <span className="fs-6"><Icon icon="solar:archive-broken" /></span>
                          <span>Archive</span>
                        </div>
                        <div className="pe-3">
                            <span className="font-size-sm">230</span>
                        </div>
                      </div>
                      <hr className="mx-3"/>
                      <div className="d-flex flex-row align-items-center justify-content-between my-1  mx-1 py-2 rounded-2 font">
                        <div className="d-flex align-items-center gap-3 flex-row ps-3 gainsboro-color font-size-sm">
                          <span className="fs-6"><Icon icon="uit:social-distancing" /></span>
                          <span>Socials</span>
                        </div>
                        <div className="pe-3">
                            <span className="font-size-sm">230</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-between my-1  mx-1 py-2 rounded-2 font">
                        <div className="d-flex align-items-center gap-3 flex-row ps-3 gainsboro-color font-size-sm">
                          <span className="fs-6"><Icon icon="solar:smartphone-update-broken" /></span>
                          <span>Updates</span>
                        </div>
                        <div className="pe-3">
                            <span className="font-size-sm">230</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-between my-1  mx-1 py-2 rounded-2 font">
                        <div className="d-flex align-items-center gap-3 flex-row ps-3 gainsboro-color font-size-sm">
                          <span className="fs-6"><Icon icon="healthicons:forum-outline" /></span>
                          <span>Forums</span>
                        </div>
                        <div className="pe-3">
                            <span className="font-size-sm">230</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-between my-1  mx-1 py-2 rounded-2 font">
                        <div className="d-flex align-items-center gap-3 flex-row ps-3 gainsboro-color font-size-sm">
                          <span className="fs-6"><Icon icon="ic:outline-shopping-bag" /></span>
                          <span>Shopping</span>
                        </div>
                        <div className="pe-3">
                            <span className="font-size-sm">230</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-between my-1  mx-1 py-2 rounded-2 font">
                        <div className="d-flex align-items-center gap-3 flex-row ps-3 gainsboro-color font-size-sm">
                          <span className="fs-6"><Icon icon="hugeicons:promotion" /></span>
                          <span>Promotion</span>
                        </div>
                        <div className="pe-3">
                            <span className="font-size-sm">230</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card border-none px-2 pt-3 pb-2 height-100">
                       <div className="d-flex flex-row justify-content-between align-items-center border-bottom pb-1">
                       <h5 className="color-primary my-0 fw-semibold">Inbox</h5>
                        <div className="px-1 py-1 d-flex align-items-center rounded-2 primary-background-50 gap-2">
                            <button className="border-none rounded-2 font-size-sm primary-background text-white px-3 py-1">All Mail</button>
                            <button className="border-none rounded-2 font-size-sm transparent-bg color-primary px-3 py-1">Unread</button>
                        </div>
                       </div>
                       <div className="input-section my-2">
                        <input type="search" className="form-control form-control-sm" placeholder="Search For Mails"/>
                       </div>
                       <div className="card my-1 rounded-3 p-2 primary-background-50">
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <p className="my-0 fw-bold font-size-sm">William Smith</p>
                            <p className="my-0 fw-semibold font-size-xs gainsboro-color">About 3 Months Ago</p>
                        </div>
                        <div className="d-flex flex-row align-items-center my-2 justify-content-between">
                            <p className="my-0 fw-semibold font-size-sm">About 3 Months Ago</p>
                        </div>
                        <p className="font-size-sm gainsboro-color">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, neque.
                             Esse laudantium sequi, sapiente....</p>
                       </div>
                       <div className="card my-1 rounded-3 p-2">
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <p className="my-0 fw-bold font-size-sm">William Smith</p>
                            <p className="my-0 fw-semibold font-size-xs gainsboro-color">About 3 Months Ago</p>
                        </div>
                        <div className="d-flex flex-row align-items-center my-2 justify-content-between">
                            <p className="my-0 fw-semibold font-size-sm">About 3 Months Ago</p>
                        </div>
                        <p className="font-size-sm gainsboro-color">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, neque.
                             Esse laudantium sequi, sapiente....</p>
                       </div>
                       <div className="card my-1 rounded-3 p-2">
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <p className="my-0 fw-bold font-size-sm">William Smith</p>
                            <p className="my-0 fw-semibold font-size-xs gainsboro-color">About 3 Months Ago</p>
                        </div>
                        <div className="d-flex flex-row align-items-center my-2 justify-content-between">
                            <p className="my-0 fw-semibold font-size-sm">About 3 Months Ago</p>
                        </div>
                        <p className="font-size-sm gainsboro-color">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, neque.
                             Esse laudantium sequi, sapiente....</p>
                       </div>
                       <div className="card my-1 rounded-3 p-2">
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <p className="my-0 fw-bold font-size-sm">William Smith</p>
                            <p className="my-0 fw-semibold font-size-xs gainsboro-color">About 3 Months Ago</p>
                        </div>
                        <div className="d-flex flex-row align-items-center my-2 justify-content-between">
                            <p className="my-0 fw-semibold font-size-sm">About 3 Months Ago</p>
                        </div>
                        <p className="font-size-sm gainsboro-color">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, neque.
                             Esse laudantium sequi, sapiente....</p>
                       </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card d-flex flex-column border-none pt-3 pb-2 height-100 px-1">
                         <div className="d-flex flex-row justify-content-between px-2 gainsboro-color align-items-center">
                         <div className="d-flex flex-row align-items-center gap-4 border-right">
                         <span className="fs-6"><Icon icon="solar:archive-broken" /></span>
                         <span className="fs-6" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Delete Message"><Icon icon="ion:trash-bin-outline" /></span>
                         <span className="fs-6"><Icon icon="tabler:trash" /></span>
                         <div className="divider-sm"></div>
                         <span className="fs-6"><Icon  icon="weui:time-outlined" /></span>
                         </div>
                         <div className="d-flex align-items-center gap-4">
                            <span className="fs-6"><Icon icon="proicons:arrow-reply" /></span>
                            <span className="fs-6"><Icon icon="streamline:mail-send-reply-all-email-message-reply-all-actions-action-arrow" /></span>
                            <span className="fs-6"><Icon icon="proicons:arrow-foward" /></span>
                            <div className="divider-sm"></div>
                            <span><Icon icon="charm:menu-kebab" /></span>
                         </div>
                         </div>
                         <hr className="my-3"/>
                         <div className="d-flex flex-row align-items-start justify-content-between">
                            <div className="d-flex flex-row align-items-start gap-2">
                                <div className="em-avatar">
                                    WS
                                </div>
                                <div className="d-block font-size-sm">
                                 <p className="my-0">Willaim Smith</p>
                                 <p className="my-0">Meeting Tomorrow</p>
                                 <div className="d-flex">
                                    <span>Reply-To:</span>
                                    <span>Williamsmith@gmail.com</span>
                                 </div>
                                </div>
                            </div>
                            <div className="date-area font-size-sm">
                                <span>Oct 22, 2024, 9:00:00 AM</span>
                            </div>
                         </div>
                         <hr className="my-3"/>
                         <div className="message-body pt-2 font-size-sm ">
                            <p>
                            Hi, let's have a meeting tomorrow to discuss the project. 
                            I've been reviewing the project details and have some ideas I'd like to share.
                             It's crucial that we align on our next steps to ensure the project's success.
                            </p>
                            <p>
                            Please come prepared with any questions or insights you may have. Looking forward to our meeting!
                            </p>
                            <p>
                            Best regards, William
                            </p>
                         </div>
                         <div className="mt-auto">
                         <hr className="my-3"/>
                            <div className="card">
                            <textarea 
                             className="form-control"
                             id="exampleFormControlTextarea1" 
                             rows="3"
                             placeholder="Reply William Smith..."
                             ></textarea>
                            </div>
                            <div className="d-flex flex row justify-content-end">
                                <button className="border-none rounded-3 p-2 w-25 my-2 primary-background text-white font-size-sm">Send Email</button>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Emails;