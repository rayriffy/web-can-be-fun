import { Alert } from "@/components/ui/alert.tsx";

export const SecureContextAlert = () => (
    <Alert status="info" title="Secure context required">
        That's means either running under localhost or HTTPS
    </Alert>
);
