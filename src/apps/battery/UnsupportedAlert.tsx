import { Alert } from "@/components/ui/alert.tsx";
import { Link } from "@chakra-ui/react";

export const UnsupportedAlert = () => (
    <Alert status="error" title="Browser unsupported">
        This brower does not support this API. Check&nbsp;
        <Link href="https://caniuse.com/battery-status">caniuse.com</Link> for more information
    </Alert>
);
