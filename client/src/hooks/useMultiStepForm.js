import { useState } from "react";

function useMultiStepForm(steps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex((page) => {
            if (page >= steps.length - 1) return;
            return page + 1;
        });
    }

    function back() {
        setCurrentStepIndex((page) => {
            if (page < 1) {
                return;
            }
            return page - 1;
        });
    }

    function goto(page) {
        setCurrentStepIndex(page);
    }

    return {
        currentStepIndex,
        steps,
        back,
        next,
        goto,
    };
}

export default useMultiStepForm;
