'use client'

import localfont from 'next/font/local'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const PillowLava = localfont({
    src: './_fonts/Pilowlava-Regular.otf',
})

export default function Home() {
    const router = useRouter()

    return (
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-t from-orange-500 to-orange-600 to-20%">
            <img
                src="/images/swoosh.svg"
                alt="logo"
                className="w-full absolute z-0"
            />
            <h1
                className={`text-4xl ${PillowLava.className} text-blue-900 z-10 my-44`}
            >
                .event
                <br />
                flow
            </h1>
            <div
                className={`my-2 w-80 h-12 bg-amber-100 rounded-3xl flex flex-row`}
            >
                <div className="w-14 bg-blue-900 rounded-3xl float-left flex items-center justify-center">
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
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                    </svg>
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    className={`px-3 py-2 w-80 h-12 bg-amber-100 placeholder-blue-900 text-gray-900 rounded-3xl focus:outline-none focus:shadow-outline-blue focus:border-blue-300`}
                />
            </div>
            <div
                className={`my-2 w-80 h-12 bg-amber-100 rounded-3xl flex flex-row`}
            >
                <div className="w-14 h-12 bg-blue-900 rounded-3xl float-left flex items-center justify-center">
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
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                    </svg>
                </div>
                <input
                    type="password"
                    placeholder="Password"
                    className={`px-3 py-2 w-80 h-12 bg-amber-100 placeholder-blue-900 text-gray-900 rounded-3xl focus:outline-none focus:shadow-outline-blue focus:border-blue-300`}
                />
            </div>
            <button
                type="button"
                className="px-3 py-2 my-2 w-56 h-12 rounded-3xl font-sans text-white bg-blue-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                onClick={() => {
                    router.push('/events')
                }}
            >
                Sign in
            </button>
            <a href="#" className="font-medium underline">
                Forgot your password?
            </a>
            <div className="flex flex-row justify-center items-center mt-4">
                <div className="mx-4 text-gray-900">or</div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <button
                    type="button"
                    className="px-2 my-2 h-8 rounded-lg font-sans text-blue-900 bg-amber-100 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                >
                    <div className="flex flex-row justify-center items-center">
                        <Image
                            src={'/images/google.png'}
                            width={20}
                            height={20}
                            alt="google icon"
                            className="mr-2"
                        />{' '}
                        Sign In
                    </div>
                </button>
                <button
                    type="button"
                    className="px-2 my-2 h-8 rounded-lg font-sans text-blue-900 bg-amber-100 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                >
                    <div className="flex flex-row justify-center items-center">
                        <Image
                            src={'/images/ticketmaster.png'}
                            width={20}
                            height={20}
                            alt="ticketmaster icon"
                            className="mr-2"
                        />{' '}
                        Sign In
                    </div>
                </button>
            </div>

            <p className=" text-gray-900 text-center">Don't have an account?</p>
            <a
                href="#"
                className="font-medium underline text-center text-blue-900"
            >
                Sign up
            </a>
        </main>
    )
}
