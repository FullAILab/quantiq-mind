import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
          <div className="max-w-md text-center">
            <h1 className="mb-4 text-4xl font-bold text-destructive">Une erreur est survenue</h1>
            <p className="mb-4 text-lg text-muted-foreground">
              Nous sommes désolés, une erreur inattendue s'est produite.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Retour à l'accueil
            </button>
            {this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Détails techniques
                </summary>
                <pre className="mt-2 overflow-auto rounded-md bg-muted p-4 text-xs">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
