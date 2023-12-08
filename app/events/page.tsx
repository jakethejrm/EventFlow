'use client'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type Event = {
    id: string
    name: string
    time: string
    date: string
    venue: string
    location: string
    image: string
}

function Events() {
    const events: Event[] = [
        {
            id: '1',
            name: 'Travis Scott - UTOPIA',
            time: '8:00 PM',
            date: 'Sunday, November 5, 2023',
            venue: 'SoFi Stadium',
            location: 'Inglewood, CA',
            image: '/images/trav.jpg',
        },
        {
            id: '2',
            name: 'Maggie Rogers',
            time: '7:00 PM',
            date: 'Friday, December 14, 2023',
            venue: 'T-Mobile Park',
            location: 'Seattle, WA',
            image: '/images/maggie.jpg',
        },
        {
            id: '3',
            name: 'San Francisco 49ers',
            time: '5:20 PM',
            date: 'Sunday, November 23, 2023',
            venue: "Levi's Stadium",
            location: 'Santa Clara, CA',
            image: '/images/purdy.jpg',
        },
        {
            id: '4',
            name: 'Harry Potter: The Musical',
            time: '2:00 PM',
            date: 'Saturday, November 23, 2023',
            venue: 'Broadway',
            location: 'Manhattan, NY',
            image: '/images/harry.jpg',
        },
        {
            id: '5',
            name: 'Disneyland New Years',
            time: '10:00 AM',
            date: 'Monday, January 1, 2024',
            venue: 'Disneyland',
            location: 'Anaheim, CA',
            image: '/images/mickey.jpg',
        },
    ]

    const [open, setOpen] = useState(false)

    function QRDialog() {
        return (
            <Transition
                show={open}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                as={Fragment}
            >
                <Dialog onClose={() => setOpen(false)}>
                    <Dialog.Panel>
                        <Dialog.Title>Deactivate account</Dialog.Title>
                        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                            <div className="relative w-auto max-w-3xl mx-4 my-6">
                                {/*content*/}
                                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex flex-row items-start px-5 pt-5 rounded-t">
                                        <button
                                            className="p-1 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setOpen(false)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="#1E3A8A"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative px-6 pb-6 flex flex-col items-center">
                                        <p className="mt-4 text-blue-900 text-xs font-bold">
                                            Check In Time
                                        </p>
                                        <p className="mb-4 text-blue-900 text-2xl font-bold">
                                            6:30 - 7:00 PM
                                        </p>
                                        <img
                                            src="/images/qr.png"
                                            className="h-64"
                                        />
                                        <div className="rounded-xl bg-blue-900 w-full flex flex-col justify-center items-center p-2">
                                            <p className="text-white">
                                                You have
                                            </p>
                                            <p className="text-white font-bold text-2xl">
                                                25 Minutes
                                            </p>
                                            <p className="text-white">
                                                until check in
                                            </p>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-start p-6 border-t border-solid rounded-b border-blueGray-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="#1E3A8A"
                                            className="w-12 h-12"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                            />
                                        </svg>
                                        <p className="ml-2 text-blue-900 text-sm">
                                            Present this screen to EventFlow
                                            Line Attendant for expedited entry
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </Transition>
        )
    }

    return (
        <>
            <div className="h-20 px-6 py-2 bg-white flex justify-between items-end ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#1E3A8A"
                    className="w-8 h-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                <p className="text-xl font-bold text-blue-900">My Events</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#1E3A8A"
                    className="w-8 h-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </div>
            <div className="flex flex-col justify-start items-start px-4 py-4 h-[calc(100vh-5rem)] bg-amber-100">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="flex flex-row justify-between items-start w-full h-28 mb-4 bg-orange-600 rounded-xl shadow-lg "
                        onClick={() => setOpen(true)}
                    >
                        <div className="flex flex-row justify-start items-center ">
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src={event.image}
                                    className="h-28 w-20 fill rounded-l-xl object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start ml-4">
                                <p className="text-md font-bold text-white">
                                    {event.name}
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    {event.venue}, {event.location}
                                </p>
                                <p className="text-xs font-normal text-white">
                                    {event.time} {event.date}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center mr-4 mt-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
            <QRDialog />
        </>
    )
}

export default Events
