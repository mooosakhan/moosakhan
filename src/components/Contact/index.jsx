import React from "react";

const Contact = () => {
    return (
        <div className="flex font-poppins flex-col md:justify-center items-center md:items-start justify-center gap-14 h-auto p-14 md:py-28">
            {/* Hero Section */}
            <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
                <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
                    Contact

                </h1>
                <h1 className="text-teal-300 font-bold text-sm font-poppins self-center lg:text-left md:self-start">
                    let's talk
                </h1>
            </div>

            {/* Skills Section */}
                <div className="bg-zinc-900 text-white flex items-center justify-center">
                    <div className="max-w-6xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Section: Form */}
                        <div>
                            
                            <form className="space-y-6">
                                {/* Full Name Input */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold mb-2 text-gray-300"
                                    >
                                        FULL NAME *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="e.g., Sabyasachi Seal"
                                        className="w-full p-3 bg-zinc-900 rounded-full border border-gray-700 focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-500"
                                    />
                                </div>
                                {/* Email Address Input */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold mb-2 text-gray-300"
                                    >
                                        EMAIL ADDRESS *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="email@domain.com"
                                        className="w-full p-3 bg-zinc-900 rounded-full border border-gray-700 focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-500"
                                    />
                                </div>
                                {/* Message Input */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold mb-2 text-gray-300"
                                    >
                                        MESSAGE *
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="Hello my name is..."
                                        rows="5"
                                        className="w-full p-3 bg-zinc-900 rounded-xl border border-gray-700 focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-500"
                                    />
                                </div>
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-zinc-900 text-zinc-100 font-bold rounded-full uppercase hover:bg-yellow-600 transition flex items-center justify-center border-zinc-200"
                                >
                                    Send Message
                                    <span className="ml-2">➤</span>
                                </button>
                            </form>
                        </div>

                        {/* Right Section: Contact Info */}
                        <div className="bg-zinc-900 p-8 rounded-xl shadow-lg border-zinc-100">
                            <h2 className="text-3xl font-bold text-yellow-500 mb-2">
                                Sabyasachi Seal
                            </h2>
                            <p className="text-teal-400 text-lg mb-6">
                                Student & Technology Enthusiast
                            </p>
                            {/* Contact Details */}
                            <div className="space-y-4 text-sm">
                                <p>
                                    <span className="font-bold text-white">AGE:</span> 20
                                </p>
                                <p>
                                    <span className="font-bold text-white">RESIDENCE:</span> India
                                </p>
                                <p>
                                    <span className="font-bold text-white">ADDRESS:</span> Kolkata
                                </p>
                                <p>
                                    <span className="font-bold text-white">PHONE:</span> +91
                                    891-042-7807
                                </p>
                                <p>
                                    <span className="font-bold text-white">E-MAIL:</span>{" "}
                                    yoboy907@gmail.com
                                </p>
                                <p>
                                    <span className="font-bold text-white">TWITTER:</span>{" "}
                                    @sabyasachi_seal
                                </p>
                            </div>
                            {/* Signature */}
                            <div className="mt-8">
                                <p className="font-signature text-4xl text-yellow-500">
                                    Sabyasachi Seal
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>

    );
};

export default Contact;
