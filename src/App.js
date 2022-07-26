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
        <div style={{
            display: "flex",
            height: '100vh',
            backgroundImage: 'radial-gradient(circle, rgba(238,174,202,0) 0%, rgba(52,126,214,1) 100%)',
        }}>
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
        </div>
    );
}



export default App;
