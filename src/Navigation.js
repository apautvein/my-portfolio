function Navigation() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-4">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg width="30px" height="30px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                    <g id="SVGRepo_iconCarrier"> <path d="M179.222 296.039C171.929 321.836 117.118 349.829 100.868 317.327C83.9601 283.513 128.707 258.291 155.272 253.461" stroke="#ffffff" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" /> <path d="M154.089 255.235C140.063 256.692 126.178 245.826 114.468 239.268C74.9513 217.139 49.2305 174.06 54.7419 127.208C60.5666 77.6967 120.975 104.935 142.262 123.068C160.693 138.769 174.617 160.101 184.839 181.908C193.152 199.64 200.112 214.666 205.536 233.651" stroke="#ffffff" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" /> <path d="M211.746 221.528C216.22 203.929 220.6 185.643 227.417 168.602C234.927 149.827 243.612 130.546 256.097 114.494C267.281 100.115 309.676 53.8821 331.79 73.9865C338.609 80.1856 341.437 92.7089 343.321 101.189C355.43 155.676 303.486 234.412 246.044 240.156" stroke="#ffffff" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" /> <path d="M249.001 238.972C282.8 227.116 321.478 272.606 305.179 305.204C286.258 343.046 248.409 334.476 215.589 283.62" stroke="#ffffff" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" /> <path d="M205.537 171.56C213.34 215.845 203.3 268.936 199.919 312.892" stroke="#ffffff" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" /> </g>

                </svg>
                <span class="font-semibold text-xl tracking-tight">Alexis Crandall</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        About
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Projects
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Contact
                    </a>
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1Yt5Uu35NvwpGyJxv7vuJgNKpae3JQI3ovtzzu-J_ukA/edit?usp=sharing" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Resume</a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;