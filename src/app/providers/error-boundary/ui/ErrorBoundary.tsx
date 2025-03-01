import React, { ErrorInfo, ReactNode } from 'react';
import { Button, ThemeButton } from '@/shared/ui/button';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary
  extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    // eslint-disable-next-line no-restricted-globals
    const reloadPage = () => location.reload();

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <p>Упс, произошла ошибка</p>
          <Button onClick={reloadPage} theme={ThemeButton.DEFAULT}>
            Обновить страницу
          </Button>
        </>
      );
    }

    return children;
  }
}
