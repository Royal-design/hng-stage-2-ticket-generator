import { FormHeader } from "./FormHeader";
import ticket from "../assets/ticket.svg";
import barCode from "../assets/barcode.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { resetForm } from "@/redux/slice/formSlice";

export const Ticket = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.form);

  const downloadTicket = () => {
    const ticketElement = document.getElementById("ticket-details");

    if (!ticketElement) return;

    html2canvas(ticketElement, {
      scale: 3, // Higher scale for better quality
      useCORS: true,
      allowTaint: true
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: [canvas.width * 0.2645, canvas.height * 0.2645] // Converts pixels to mm
      });

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.width,
        pdf.internal.pageSize.height
      );
      pdf.save("ticket.pdf");
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-[700px] max-md:w-full max-md:mt-[30px] p-[48px] max-md:py-[32px]  max-md:px-[24px] gap-[32px] border border-[#0E464F] bg-[#041E23] rounded-[24px]">
      <div className="flex flex-col items-start gap-[12px]  w-full">
        <div className=" max-md:hidden w-full">
          <FormHeader />
        </div>
        <main className="flex flex-col justify-center pt-[27.5px]  max-md:pt-0 items-center gap-[32px] w-full">
          <div className=" md:hidden w-full">
            <FormHeader />
          </div>
          <section className="flex flex-col items-center gap-[16px] w-full">
            <p className="text-white text-center font-alatsi text-[32px] max-md:text-[24px] font-normal leading-none">
              Your Ticket is Booked!
            </p>
            <p className="text-[#FAFAFA] max-md:hidden text-center font-roboto text-[16px] font-normal leading-[150%]">
              Check your email for a copy or you can download
            </p>
            <p className="text-[#FAFAFA] md:hidden w-[287px] text-center font-roboto text-[16px] font-normal leading-[150%]">
              You can download or Check your email for a copy
            </p>
          </section>
          <section className="flex flex-col items-center gap-6 w-full">
            <div
              id="ticket-details"
              className="flex px-[21px] max-md:px-[17.5px] py-[32px] flex-col justify-center items-center gap-[10px] self-stretch rounded-[24px]"
            >
              <div className="w-[300px] h-[600px] ">
                <div className="relative flex flex-col justify-center items-center gap-[10px] w-full ">
                  <img src={ticket} alt="cutout" />
                  <div className=" absolute top-[20px] flex w-[260px] h-[446px] p-[14px] items-center flex-shrink-0 rounded-[16px] border border-[#24A0B5] bg-[rgba(3,30,33,0.10)] backdrop-blur-[2px]">
                    <div className="flex w-[232px] flex-col items-center gap-[20px] flex-shrink-0">
                      <article className="flex w-[175px] flex-col items-center">
                        <p className="text-white text-center font-road-rage text-[34px] font-normal leading-[100%]">
                          Techember Fest ”25
                        </p>
                        <div className="flex p-[4px] flex-col justify-center items-center gap-[4px]">
                          <p className="text-white font-roboto text-[10px] font-normal leading-[150%]">
                            📍 04 Rumens road, Ikoyi, Lagos
                          </p>
                          <p className="text-white font-roboto text-[10px] font-normal leading-[150%]">
                            📅 March 15, 2025 | 7:00 PM
                          </p>
                        </div>
                      </article>
                      <figure className="w-[140px] h-[140px] rounded-[12px] border-[4px] border-[rgba(36,160,181,0.50)] bg-lightgray bg-cover bg-no-repeat bg-center">
                        <img
                          src={user.image ?? ""}
                          alt="user"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </figure>
                      <div
                        className="flex p-1 flex-col justify-center items-center self-stretch rounded-lg border border-[#133D44] bg-[#08343C] w-full"
                        style={{
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                          width: "100%"
                        }}
                      >
                        <div className="flex items-start gap-2 w-full border-b border-b-[#12464E]">
                          <div className="flex p-1 flex-col justify-start  items-start gap-1 flex-1 border-r border-r-[#12464E] w-full min-w-0">
                            <p className="text-white   font-roboto text-xs font-normal leading-[150%] opacity-33">
                              Enter your name
                            </p>
                            <p
                              className="text-white h-full font-roboto text-sm font-bold leading-[150%] w-full max-w-full"
                              style={{
                                wordBreak: "break-word",
                                overflowWrap: "break-word"
                              }}
                            >
                              {user ? user.name : "Avi Chukwu"}
                            </p>
                          </div>
                          <div className="flex p-1 h-auto flex-col justify-start items-start gap-1 flex-1 w-full min-w-0">
                            <p className="text-white  font-roboto text-xs font-normal leading-[150%] opacity-33">
                              Enter your email *
                            </p>
                            <p
                              className="text-white h-full font-roboto text-sm font-bold leading-[150%] w-full max-w-full"
                              style={{
                                wordBreak: "break-word",
                                overflowWrap: "break-word"
                              }}
                            >
                              {user ? user.email : "User@email.com"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 self-stretch border-b border-b-[#12464E] w-full">
                          <div className="flex p-1 flex-col justify-center items-start gap-1 flex-1 border-r border-r-[#12464E] w-full min-w-0">
                            <p className="text-white font-roboto text-xs font-normal leading-[150%] opacity-33">
                              Ticket Type:
                            </p>
                            <p
                              className="text-white font-roboto text-xs font-normal leading-[150%] w-full max-w-full"
                              style={{
                                wordBreak: "break-word",
                                overflowWrap: "break-word"
                              }}
                            >
                              {user ? user.ticketType : "VIP"}
                            </p>
                          </div>
                          <div className="flex p-1 flex-col justify-center items-start gap-1 flex-1 w-full min-w-0">
                            <p className="text-white font-roboto text-xs font-normal leading-[150%] opacity-33">
                              Ticket for :
                            </p>
                            <p
                              className="text-white font-roboto text-xs font-normal leading-[150%] w-full max-w-full"
                              style={{
                                wordBreak: "break-word",
                                overflowWrap: "break-word"
                              }}
                            >
                              {user ? user.ticketNumber : "1"}
                            </p>
                          </div>
                        </div>

                        <div className="flex p-2 flex-col justify-center items-start gap-1 self-stretch w-full min-w-0">
                          <p className="text-white font-roboto text-xs font-normal leading-[150%] opacity-33">
                            Special request?
                          </p>
                          <p
                            className="text-white font-roboto text-xs font-normal leading-[150%] w-full max-w-full"
                            style={{
                              wordBreak: "break-word",
                              overflowWrap: "break-word"
                            }}
                          >
                            {user
                              ? user.request
                              : "Or the user's sad story they write in here gets this whole space, Max of three rows"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure className="absolute bottom-[22px]">
                    <img src={barCode} alt="barcode" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="flex max-md:hidden items-start w-full font-nanum-myeongjo gap-4 flex-[1_0_0]">
              <Button
                onClick={() => {
                  dispatch(resetForm());
                  window.location.href = "/generate-ticket";
                  window.scrollTo({
                    top: 0
                  });
                }}
                className="flex bg-[#052228] w-full transition-colors duration-200 text-[#24A0B5] py-6 justify-center items-center gap-2 flex-1 rounded-md border border-[#24A0B5]"
              >
                Book Another Ticket
              </Button>
              <Button
                onClick={downloadTicket}
                className=" hover:bg-[#3c98a8] w-full transition-colors duration-200 flex px-6 py-6 justify-center items-center gap-2 flex-1 rounded-md bg-[#24A0B5]"
              >
                Download Ticket
              </Button>
            </div>
            <div className="flex md:hidden flex-col items-start w-full font-nanum-myeongjo gap-4 flex-[1_0_0]">
              <Button
                onClick={downloadTicket}
                className=" hover:bg-[#3c98a8] w-full transition-colors duration-200 flex px-6 py-4 justify-center items-center gap-2 flex-1 rounded-md bg-[#24A0B5]"
              >
                Download Ticket
              </Button>
              <Button
                onClick={() => {
                  dispatch(resetForm());
                  window.location.href = "/generate-ticket";
                  window.scrollTo({
                    top: 0
                  });
                }}
                className="flex bg-[#052228] w-full transition-colors duration-200 text-[#24A0B5] py-4 justify-center items-center gap-2 flex-1 rounded-md border border-[#24A0B5]"
              >
                Book Another Ticket
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
