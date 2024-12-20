import Link from 'next/link'

export default function NotFound() {
    return (
        <div className={"flex flex-col min-h-[calc(100vh-4rem)] justify-center items-center"}>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}