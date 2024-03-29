import React, {ErrorInfo} from "react";
interface IProps{

}
interface IState{
    hasError: boolean
}
export default class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps | Readonly<IProps>) {
        super(props);
        this.state = { hasError: false };
    }
    // state = {
    //     hasError: false
    // }

    static getDerivedStateFromError(error: Error) {
        // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}