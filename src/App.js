import {Alert, Container, Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import StaticTimePicker from "./components/StaticTimePicker";
import {Logo} from "./components/Logo";
import {paperlessEntrance, today, workTime} from "./costants/costants";



function App() {
    const [start, setStart] = useState(today);
    const [end, setEnd] = useState(new Date('00:00'));
    const [toJustify, setToJustify] = useState(false);

    useEffect(() => {
        setEnd(new Date(start.getTime() + workTime));
        setToJustify(start > paperlessEntrance.getTime())

    }, [start])

    const onChange = (newDate) => setStart(newDate);

    return (
        <Container maxWidth={'sm'}>
            <Logo/>
            <Stack mt={10} spacing={4}>
                <StaticTimePicker
                    disable={false}
                    text={'Orario ingresso'}
                    time={start}
                    onChange={onChange}
                />
                <StaticTimePicker
                    disable={true}
                    text={'Orario uscita'}
                    time={end}
                    onChange={onChange}
                />
                {toJustify &&
                    <Alert variant="filled" severity="error">
                        Giustificare con paperless 2.0 — Remember it!
                    </Alert>
                }
            </Stack>
        </Container>
    );
}



export default App;
