import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-red-500 p-4">
                    <div className="max-w-xl w-full border border-red-800 rounded bg-red-950/20 p-6">
                        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
                        <pre className="whitespace-pre-wrap break-words font-mono text-sm bg-black/50 p-4 rounded text-red-300">
                            {this.state.error?.toString()}
                        </pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
