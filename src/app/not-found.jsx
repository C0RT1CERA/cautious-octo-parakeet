import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found!!</h1>
            <p className="mb-4 text-center">The page you are looking for doesn't exist. </p>
                <p>Please navigate to</p>
                <Link href="/">
                    
                    <p className="text-xl text-blue-500 hover:underline ml-1">HOME</p>
                </Link>
        </div>
    );
}

export default NotFound;
