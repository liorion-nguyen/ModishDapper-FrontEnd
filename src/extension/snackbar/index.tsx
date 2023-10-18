import { SnackbarProvider, useSnackbar } from 'notistack';
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';

function MyApp() {
    const { enqueueSnackbar } = useSnackbar();
    const snackbar = useSelector((state: any) => state.snackbar);

    useEffect(() => {
        if (snackbar.mode) {
            enqueueSnackbar(snackbar.content, { variant: snackbar.type || '' });
        }
    }, [snackbar]);

    return (
        <Fragment></Fragment>
    );
}

export default function IntegrationNotistack() {
    return (
        <SnackbarProvider maxSnack={3}>
            <MyApp />
        </SnackbarProvider>
    );
}