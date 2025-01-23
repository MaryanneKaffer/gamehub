import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { IoIosArrowBack } from "react-icons/io";

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <Button className="absolute bottom-4 left-4" size="lg" radius="full" color="danger" variant="light" onPress={() => navigate("/")}>
            <IoIosArrowBack />
            Back to GameHub
        </Button>
    );
}