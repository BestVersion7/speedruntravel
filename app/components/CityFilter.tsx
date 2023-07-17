"use client";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const CityFilter = (props: { city: string }) => {
    const router = useRouter();

    const handleChange = (e: any) => {
        router.push(`/reels/city/${e.target.value}`);
    };

    return (
        <Box sx={{ maxWidth: 500 }}>
            <FormControl fullWidth>
                <InputLabel>Location</InputLabel>
                <Select
                    value={props.city}
                    label="Location"
                    onChange={handleChange}
                >
                    <MenuItem disabled>UNITED STATES</MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="tampa">
                        Tampa, Florida
                    </MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="dc">
                        Washington, D.C.
                    </MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="boston">
                        Boston, Massachusetts
                    </MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="raleigh">
                        Raleigh, North Carolina
                    </MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="arlington">
                        Arlington, Virginia
                    </MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="richmond">
                        Richmond, Virginia
                    </MenuItem>
                    <MenuItem disabled>FRANCE</MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="paris">
                        Paris
                    </MenuItem>
                    <MenuItem disabled>AUSTRIA</MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="salzburg">
                        Salzburg
                    </MenuItem>
                    <MenuItem disabled>ITALY</MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="verona">
                        Verona
                    </MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="venice">
                        Venice
                    </MenuItem>

                    <MenuItem disabled>GERMANY</MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="berlin">
                        Berlin
                    </MenuItem>

                    <MenuItem disabled>NETHERLANDS</MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="amsterdam">
                        Amsterdam
                    </MenuItem>

                    <MenuItem disabled>CZECHIA</MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="prague">
                        Prague
                    </MenuItem>

                    <MenuItem disabled>UNITED KINGDOM</MenuItem>
                    <MenuItem style={{ fontWeight: "bold" }} value="london">
                        London
                    </MenuItem>
                </Select>
            </FormControl>
            <Link href="/reels">
                <Button variant="contained">Clear Filters</Button>
            </Link>
        </Box>
    );
};

export default CityFilter;
