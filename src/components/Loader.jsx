import {Html} from "@react-three/drei";
import './loader.css'

const Loader = () => {
    return (
        <Html>
            <div className='flex justify-center items-center'>
                <div
                    className='w-20 h-20'>
                    <div className='loader'>
                        <div className="top"></div>
                        <div className="bottom"></div>
                    </div>
                </div>
            </div>
        </Html>
    );
};

export default Loader;
