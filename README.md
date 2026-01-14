# Porsche Premium Car Experience

Experience the ultimate in luxury and performance with our latest Porsche models. This project is a premium car showcase application built with modern web technologies, offering a sleek, immersive, and high-performance user experience.

![Home Page Placeholder](./screenshots/home.png)
*Replace this image with a screenshot of the Home Page*

## Features

*   **Immersive Hero Section**: Full-screen video backgrounds and dynamic typography to capture attention.
*   **Model Showcase**: Interactive 3D or high-fidelity image carousels allowing users to explore different Porsche models.
*   **Detailed Service Pages**: Information on maintenance, genuine parts, and warranty services.
*   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
*   **Smooth Animations**: Powered by Framer Motion and GSAP for a premium feel.
*   **Dark Mode Aesthetic**: A sleek, sophisticated UI designed to match the Porsche brand identity.

## Screenshots

### Model Explorer
![Models Page Placeholder](./screenshots/models.png)
*Explore our range of premium vehicles.*

### Service & Maintenance
![Service Page Placeholder](./screenshots/service.png)
*Book appointments and view service details.*

## Tech Stack

This project leverages the latest tools in the Next.js ecosystem:

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `tailwindcss-animate`
*   **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Headless UI](https://headlessui.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
*   **Database**: Supabase (PostgreSQL)
*   **Deployment**: Vercel

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

*   Node.js (v18 or higher)
*   npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Subham-KRLX/Porsche-premium-car-experience.git
    cd Porsche-premium-car-experience
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # Note: If you see peer dependency warnings, you can use --legacy-peer-deps
    npm install --legacy-peer-deps
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add your Supabase credentials:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
    DATABASE_URL=your_database_url
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This application is ready to be deployed on **Vercel**.

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Add the environment variables from your `.env` file to the Vercel project settings.
4.  Deploy!

## License

This project is licensed under the MIT License.
