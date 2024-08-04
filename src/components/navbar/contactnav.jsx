import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactNavbar = () => {
    return (
        <div className='flex flex-row justify-end gap-2 border-blk1 border-l-4 border-r-4 border-t-4 bg-y2 overflow-hidden'>
            <div className='flex items-center p-2 gap-2'>
                <FaPhoneAlt className="text-xl sm:text-3xl text-blk3 " /> {/* Adjust size for small screens */}
                <h3 className='text-xs sm:text-base text-blk3 '>+91 7383181400</h3> {/* Adjust size for small screens */}
            </div>
            <div className='flex items-center p-2 gap-2'>
                <MdEmail className="text-xl sm:text-3xl text-blk3 " /> {/* Adjust size for small screens */}
                <h3 className='text-xs sm:text-base text-blk3 '>support@revmedsync.com</h3> {/* Adjust size for small screens */}
            </div>
        </div>
    );
}

export default ContactNavbar;