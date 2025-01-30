import Swal from 'sweetalert2';

// Reusable function for showing alerts
export const showSweetAlert = async (variant: number) => {
    if (variant === 1) {
        Swal.fire({
            title: 'Saved successfully',
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                confirmButton: 'custom-confirm-button',
            }
        });
    } else if (variant === 2) {
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'You clicked the button!',
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                htmlContainer: 'custom-val',
                confirmButton: 'custom-confirm-button',
            }
        });
    } else if (variant === 3) {
        const ipAPI = 'https://api.ipify.org?format=json';
        Swal.fire({
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text: 'Your public IP will be received via AJAX request',
            showLoaderOnConfirm: true,
            preConfirm: async () => {
                try {
                    const response = await fetch(ipAPI);
                    const data = await response.json();
                    Swal.fire({
                        title: data.ip,
                        customClass: {
                            popup: 'custom-popup',
                            title: 'custom-title',
                            confirmButton: 'custom-confirm-button',
                        }
                    });
                } catch {
                    Swal.fire({
                        icon: 'error',
                        title: 'Unable to get your public IP',
                        customClass: {
                            popup: 'custom-popup',
                            title: 'custom-title',
                            confirmButton: 'custom-confirm-button',
                        }
                    });
                }
            },
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                htmlContainer: 'custom-val',
                confirmButton: 'custom-confirm-button',
            }
        });
    } else if (variant === 4) {
        const steps = ['1', '2', '3'];
        const swalQueueStep = Swal.mixin({
            confirmButtonText: 'Next →',
            showCancelButton: true,
            progressSteps: steps,
            input: 'text',
            inputAttributes: {
                required: 'true',
            },
            validationMessage: 'This field is required',
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                htmlContainer: 'custom-val',
                confirmButton: 'custom-confirm-button',
                cancelButton: 'custom-cancel-button',
            }
        });
        const values: any = [];
        let currentStep;
        for (currentStep = 0; currentStep < steps.length;) {
            const result = await swalQueueStep.fire({
                title: `Question ${steps[currentStep]}`,
                text: currentStep === 0 ? 'Chaining swal modals is easy.' : '',
                inputValue: values[currentStep],
                showCancelButton: currentStep > 0,
                currentProgressStep: currentStep,
            });
            if (result.value) {
                values[currentStep] = result.value;
                currentStep++;
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                currentStep--;
            } else {
                break;
            }
        }
        if (currentStep === steps.length) {
            Swal.fire({
                title: 'All done!',
                html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',
                confirmButtonText: 'Lovely!',
                customClass: {
                    popup: 'custom-popup',
                    title: 'custom-title',
                    htmlContainer: 'custom-val',
                    confirmButton: 'custom-confirm-button',
                }
            });
        }
    } else if (variant === 5) {
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: '/images/person.gif',
            imageWidth: 180,
            imageHeight: 'auto',
            imageAlt: 'Custom image',
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                htmlContainer: 'custom-val',
                confirmButton: 'custom-confirm-button',
            }
        });
    } else if (variant === 6) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            iconColor: "#FF0000",
            showCancelButton: true,
            confirmButtonText: 'Delete',
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                icon: 'custom-icon',
                htmlContainer: 'custom-val',
                confirmButton: 'custom-delete-button',
                cancelButton: 'custom-cancel-button',
            }
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                    customClass: {
                        popup: 'custom-popup',
                        title: 'custom-title',
                        htmlContainer: 'custom-val',
                        confirmButton: 'custom-confirm-button',
                    }
                });
            }
        });
    } else if (variant === 7) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'custom-delete-button',
                cancelButton: 'custom-cancel-button',
                popup: 'custom-popup',
            },
        });
        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                iconColor: "#FF0000",
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true,
                customClass: {
                    popup: 'custom-popup',
                    title: 'custom-title',
                    icon: 'custom-icon',
                    htmlContainer: 'custom-val',
                    confirmButton: 'custom-delete-button',
                    cancelButton: 'custom-cancel-button',
                }
            })
            .then((result) => {
                if (result.value) {
                    swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
    } else if (variant === 8) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="javascript:;">Why do I have this issue?</a>',
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                htmlContainer: 'custom-val',
                confirmButton: 'custom-confirm-button',
            }
        });
    } else if (variant === 9) {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            background: "#000000"
        });
        toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                htmlContainer: 'custom-val',
            }
        });
    }
};

interface SweetAlertProps {
    variant: number;
    children: React.ReactNode;
}

const SweetAlert = ({ variant, children }: SweetAlertProps) => {
    const handleClick = () => {
        showSweetAlert(variant);
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            {children}
        </div>
    );
};

export default SweetAlert;