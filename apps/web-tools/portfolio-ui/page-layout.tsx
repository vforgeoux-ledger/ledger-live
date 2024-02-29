export const PageLayout = ({ header, children }) => {
    return (
        <div className="flex bg-background min-h-screen flex-col font-inter antialiased">
            {header}
            <main className="mb-auto">{children}</main>
        </div>
    );
}