import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function GameModal({
    resetGame,
    winNotif,
    isOpen,
    onOpenChange
}: {
    resetGame: () => void;
    winNotif: React.ReactNode;
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}) {
    const navigate = useNavigate();

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
            <ModalContent>
                <ModalHeader className="m-3"></ModalHeader>
                <ModalBody>
                    {winNotif}
                </ModalBody>
                <ModalFooter className="flex justify-center">
                    <Button size="lg" radius="full" onPress={() => navigate("/")}>
                        Back to GameHub
                    </Button>
                    <Button color="success" size="lg" radius="full" onPress={resetGame}>
                        Play Again
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}