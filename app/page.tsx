"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Fragment, useEffect, useState, useRef } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { EventSourceInput } from "@fullcalendar/core/index.js";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import multiMonthPlugin from "@fullcalendar/multimonth";
import GoalCard from "./Components/GoalCard";
import GoalCategoryCard from "./Components/GoalCategoryCard";
import NotCompletedGoals from "./Components/NotCompletedGoals"

interface Event {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
}

export default function Home() {
  const [MonthView, setMonthView] = useState(true);
  const [WeekView, setWeekView] = useState(false);
  const [DayView, setDayView] = useState(false);
  const [currentViewDate, setCurrentViewDate] = useState("");
  const calendarRef = useRef(null);

  // State for storing the extracted year, month, and date
  const [dateDetails, setDateDetails] = useState({
    year: "",
    month: "",
    date: "",
    weekOfMonth: "",
    dayOfWeek: "",
  });

  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    start: "",
    allDay: false,
    id: 0,
  });

  const updateCurrentViewDate = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const currentDate = calendarApi.getDate();
      // Use local date components to avoid time zone issues with toISOString()
      const year = currentDate.getFullYear().toString();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // +1 because getMonth() is 0-indexed
      const date = currentDate.getDate().toString().padStart(2, "0");
      const formattedDate = `${year}-${month}-${date}`;

      // Calculate the week of the month
      const firstDayOfMonth = new Date(year, month - 1, 1); // Adjust for 0-index month
      const diffInDays = Math.floor(
        (currentDate - firstDayOfMonth) / (24 * 60 * 60 * 1000)
      );
      const weekOfMonth = Math.ceil(
        (diffInDays + firstDayOfMonth.getDay()) / 7
      );

      // Determine the day of the week, adjusting from 0 (Sunday) to 6 (Saturday) to 1 (Monday) to 7 (Sunday)
      const dayOfWeek = currentDate.getDay();
      const adjustedDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

      // Update state with the formatted date, extracted details, week of the month, and day of the week
      setCurrentViewDate(formattedDate);
      setDateDetails({
        year,
        month,
        date,
        weekOfMonth,
        dayOfWeek: adjustedDayOfWeek,
      });

      // Optionally, log the current view date, extracted details, week of the month, and day of the week
      console.log("Current View Date:", formattedDate);
      console.log(
        "Extracted Year:",
        year,
        "Month:",
        month,
        "Date:",
        date,
        "Week of Month:",
        weekOfMonth,
        "Day of Week:",
        adjustedDayOfWeek
      );
    }
  };

  //const getWeekOfMonth = (date) => {
  // const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  // const firstDayOfWeek = firstDayOfMonth.getDay(); // get day of week where 0 is Sunday
  // const offsetDate = date.getDate() + firstDayOfWeek - 1; // calculate offset
  // return Math.floor(offsetDate / 7) + 1; // calculate week number
  // };

  useEffect(() => {
    updateCurrentViewDate();
    const titleElement = document.getElementById("fc-dom-1");
    console.log(titleElement);

    const MonthButton = document.querySelector(".fc-dayGridMonth-button");
    const MonthViewHandleClick = () => {
      setMonthView(true);
      setWeekView(false);
      setDayView(false);
    };

    // Attach the event listener
    if (MonthButton)
      MonthButton.addEventListener("click", MonthViewHandleClick);

    const WeekButton = document.querySelector(".fc-timeGridWeek-button");
    const WeekViewHandleClick = () => {
      setMonthView(false);
      setWeekView(true);
      setDayView(false);
    };

    // Attach the event listener
    if (WeekButton) WeekButton.addEventListener("click", WeekViewHandleClick);

    const DayButton = document.querySelector(".fc-timeGridDay-button");
    const DayViewHandleClick = () => {
      setMonthView(false);
      setWeekView(false);
      setDayView(true);
    };

    // Attach the event listener
    if (DayButton) DayButton.addEventListener("click", DayViewHandleClick);

    let draggableEl = document.getElementById("draggable-el");
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          let start = eventEl.getAttribute("start");
          return { title, id, start };
        },
      });
    }
  }, []);

  function handleDateClick(arg: { date: Date; allDay: boolean }) {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    setShowModal(true);
  }

  function addEvent(data: DropArg) {
    const event = {
      ...newEvent,
      start: data.date.toISOString(),
      title: data.draggedEl.innerText,
      allDay: data.allDay,
      id: new Date().getTime(),
    };
    setAllEvents([...allEvents, event]);
  }

  function handleDeleteModal(data: { event: { id: string } }) {
    setShowDeleteModal(true);
    setIdToDelete(Number(data.event.id));
  }

  function handleDelete() {
    setAllEvents(
      allEvents.filter((event) => Number(event.id) !== Number(idToDelete))
    );
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  function handleCloseModal() {
    setShowModal(false);
    setNewEvent({
      title: "",
      start: "",
      allDay: false,
      id: 0,
    });
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewEvent({
      ...newEvent,
      title: e.target.value,
    });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAllEvents([...allEvents, newEvent]);
    setShowModal(false);
    setNewEvent({
      title: "",
      start: "",
      allDay: false,
      id: 0,
    });
  }

  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-gray-700">Personal Planner</h1>
      </nav>

      <div className=" flex w-full h-20 gap-3 mx-20 ">
        <div className=" w-80 h-50 ">
          <GoalCategoryCard
            month={dateDetails.month}
            week={dateDetails.weekOfMonth}
            day={dateDetails.dayOfWeek}
            color="bg-[#76a1f1]"
            title={"Career"}
            type={
              WeekView
                ? "Weekly"
                : MonthView
                ? "Monthly"
                : DayView
                ? "Daily"
                : undefined
            }
          />
        </div>
        <div className=" w-80 h-50 ">
          <GoalCategoryCard
            month={dateDetails.month}
            week={dateDetails.weekOfMonth}
            day={dateDetails.dayOfWeek}
            color="bg-[#91eead]"
            title={"Health"}
            type={
              WeekView
                ? "Weekly"
                : MonthView
                ? "Monthly"
                : DayView
                ? "Daily"
                : undefined
            }
          />
        </div>
        <div className=" w-80 h-50 ">
          <GoalCategoryCard
            month={dateDetails.month}
            week={dateDetails.weekOfMonth}
            day={dateDetails.dayOfWeek}
            color="bg-[#fda66c]"
            title={"Relationship"}
            type={
              WeekView
                ? "Weekly"
                : MonthView
                ? "Monthly"
                : DayView
                ? "Daily"
                : undefined
            }
          />
        </div>
        <div className=" w-80 h-50 ">
          <GoalCategoryCard
            month={dateDetails.month}
            week={dateDetails.weekOfMonth}
            day={dateDetails.dayOfWeek}
            color="bg-[#ff00ff]"
            title={"Entertainment"}
            type={
              WeekView
                ? "Weekly"
                : MonthView
                ? "Monthly"
                : DayView
                ? "Daily"
                : undefined
            }
          />
        </div>
      </div>

      <main className="flex flex-row max-h-screen">
        <div className="flex flex-col">
          {MonthView && (
            <div className="flex flex-row gap-5 pt-10 ml-[5rem] ">
              <div className="flex gap-5 flex-col">
                {" "}
                <GoalCard
                  month={dateDetails.month}
                  week={dateDetails.weekOfMonth}
                  day={dateDetails.dayOfWeek}
                  type={"Weekly"}
                  color="bg-[#76a1f1]"
                  title={"Week One"}
                />
                <GoalCard
                  month={dateDetails.month}
                  week={dateDetails.weekOfMonth}
                  day={dateDetails.dayOfWeek}
                  type={"Weekly"}
                  color="bg-[#91eead]"
                  title={"Week Two"}
                />
              </div>
              <div className="flex gap-5 flex-col">
                {" "}
                <GoalCard
                  month={dateDetails.month}
                  week={dateDetails.weekOfMonth}
                  day={dateDetails.dayOfWeek}
                  type={"Weekly"}
                  color="bg-[#fda66c]"
                  title={"Week Three"}
                />
                <GoalCard
                  month={dateDetails.month}
                  week={dateDetails.weekOfMonth}
                  day={dateDetails.dayOfWeek}
                  type={"Weekly"}
                  color="bg-[#ff00ff]"
                  title={"Week Four"}
                />
              </div>
            </div>
          )}
          {WeekView && (
            <div className="flex flex-col gap-3 pt-10 ml-[15rem] ">
              {" "}
              <GoalCard
                month={dateDetails.month}
                week={dateDetails.weekOfMonth}
                dayOfWeek={dateDetails.dayOfWeek}
                type={"Daily"}
                color="bg-[#76a1f1]"
                title={"Day One"}
              />
              <GoalCard
                month={dateDetails.month}
                week={dateDetails.weekOfMonth}
                dayOfWeek={dateDetails.dayOfWeek}
                date={dateDetails.date}
                type={"Daily"}
                color="bg-[#76a1f1]"
                title={"Day Two"}
              />{" "}
              <GoalCard
                month={dateDetails.month}
                week={dateDetails.weekOfMonth}
                dayOfWeek={dateDetails.dayOfWeek}
                date={dateDetails.date}
                type={"Daily"}
                color="bg-[#76a1f1]"
                title={"Day Three"}
              />
              <GoalCard
                month={dateDetails.month}
                week={dateDetails.weekOfMonth}
                date={dateDetails.date}
                dayOfWeek={dateDetails.dayOfWeek}
                type={"Daily"}
                color="bg-[#76a1f1]"
                title={"Day Four"}
              />{" "}
              <GoalCard
                month={dateDetails.month}
                week={dateDetails.weekOfMonth}
                date={dateDetails.date}
                dayOfWeek={dateDetails.dayOfWeek}
                type={"Daily"}
                color="bg-[#76a1f1]"
                title={"Day Five"}
              />
              <GoalCard
                month={dateDetails.month}
                week={dateDetails.weekOfMonth}
                date={dateDetails.date}
                dayOfWeek={dateDetails.dayOfWeek}
                type={"Daily"}
                color="bg-[#76a1f1]"
                title={"Day Six"}
              />
               <GoalCard
                month={dateDetails.month}
                week={dateDetails.weekOfMonth}
                date={dateDetails.date}
                dayOfWeek={dateDetails.dayOfWeek}
                type={"Daily"}
                color="bg-[#76a1f1]"
                title={"Day Seven"}
              />
            </div>
          )}

          {DayView && (
            <>
             <NotCompletedGoals week={dateDetails.weekOfMonth} />
              
              <div className="card  ml-[10rem] w-100 bg-primary mt-10 text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>Important days ahead</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col  pt-10 items-center ">
          <div className=" ml-[4rem] grid grid-cols-70">
            <div className="col-span-30">
              <FullCalendar
                ref={calendarRef}
                plugins={[
                  resourceTimelinePlugin,
                  dayGridPlugin,
                  interactionPlugin,
                  timeGridPlugin,
                  multiMonthPlugin,
                ]}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "timeGridDay,dayGridMonth,timeGridWeek,multiMonthYear",
                }}
                initialView="dayGridMonth"
                events={allEvents as EventSourceInput}
                nowIndicator={true}
                editable={true}
                droppable={true}
                selectable={true}
                selectMirror={true}
                dateClick={handleDateClick}
                drop={(data) => addEvent(data)}
                eventClick={(data) => handleDeleteModal(data)}
                datesSet={() => updateCurrentViewDate()}
              />
            </div>
          </div>

          <Transition.Root show={showDeleteModal} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={setShowDeleteModal}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel
                      className="relative transform overflow-hidden rounded-lg
                   bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                    >
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div
                            className="mx-auto flex h-12 w-12 flex-shrink-0 items-center 
                      justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                          >
                            <ExclamationTriangleIcon
                              className="h-6 w-6 text-red-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              Delete Event
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Are you sure you want to delete this event?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm 
                      font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 
                      shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={handleCloseModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <Transition.Root show={showModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setShowModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                      <div>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                          <CheckIcon
                            className="h-6 w-6 text-green-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:mt-5">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Add Event
                          </Dialog.Title>
                          <form action="submit" onSubmit={handleSubmit}>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="title"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 
                            focus:ring-inset focus:ring-violet-600 
                            sm:text-sm sm:leading-6"
                                value={newEvent.title}
                                onChange={(e) => handleChange(e)}
                                placeholder="Title"
                              />
                            </div>
                            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                              <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:col-start-2 disabled:opacity-25"
                                disabled={newEvent.title === ""}
                              >
                                Create
                              </button>
                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                                onClick={handleCloseModal}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </main>
    </>
  );
}
