import React from 'react';

const ResumeTemplate = () => {
    return (
        <div className="max-w-screen-lg mx-auto bg-white shadow-lg p-8 my-8">
            <div className="relative block page flex">
                {/* Left Sidebar */}
                <div className="w-1/3 bg-gray-200 py-10 px-6 relative">
                    {/* Profile Image */}
                    <div className="mugshot mb-4">
                        <img src="/public/images/img-2.png" alt="Profile" className="w-full h-auto rounded-full" />
                    </div>
                    {/* Contact Information and Social Links */}
                    <div>
                        <p>123 My Place Drive</p>
                        <p>Astoria, New York 11105</p>
                        <p>1-800-CALLPLZ</p>
                        <p>emailsareforsquares@gmail.com</p>
                        <br/>
                        <p className="block social twitter">Twitter stuff</p>
                        <p className="block social pinterest">Pinterest things</p>
                        <p className="block social linked-in">Linked-in man</p>
                        <p className="uppercase block mt-6 font-semibold">Expertise</p>
                        <p className="block list-thing">HTML</p>
                        <p className="block list-thing">CSS (Stylus)</p>
                        <p className="block list-thing">JavaScript & jQuery</p>
                        <p className="block list-thing">Killer Taste</p>
                        <p className="uppercase block mt-6 font-semibold">Education</p>
                        <p className="block list-thing">Advanced potion making</p>
                        <p className="block list-thing">Degree in popping and locking</p>
                        <p className="block list-thing">Knitting game on point</p>
                        <p className="block list-thing">Culinary af</p>
                    </div>
                </div>
                
                {/* Main Content Container */}
                <div className="relative content-container ml-6 px-10 py-6 w-2/3">
                    <h2 className="uppercase text-center text-4xl font-semibold mb-4">Jr Front-End Developer</h2>
                    <div className="block bg-gray-400 h-px w-96 mx-auto mb-6"></div>
                    <div className="uppercase text-gray-600 mb-2">Profile</div>
                    <p className="text-justify mb-8">Retro DIY quinoa, mixtape williamsburg master cleanse bushwick tumblr chillwave dreamcatcher hella wolf paleo...</p>
                    <div className="uppercase text-gray-600 mb-2">Experience</div>
                    <h3 className="font-semibold text-xl mb-2">Job #1</h3>
                    <p className="text-gray-700 mb-4">First job description</p>
                    <p className="text-justify mb-8">Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony raw denim messenger bag leggings...</p>
                    <h3 className="font-semibold text-xl mb-2">Job #2</h3>
                    <p className="text-gray-700 mb-4">Second Job Description</p>
                    <p className="text-justify mb-8">Beard before they sold out photo booth distillery health goth...</p>
                    <h3 className="font-semibold text-xl mb-2">Job #3</h3>
                    <p className="text-gray-700 mb-4">Third Job Description</p>
                    <p className="text-justify mb-8">Next level roof party lo-fi fingerstache skateboard...</p>
                </div>
            </div>
        </div>
    );
}

export default ResumeTemplate;
