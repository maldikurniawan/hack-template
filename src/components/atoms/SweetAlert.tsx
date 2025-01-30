import Swal from 'sweetalert2';

const SweetAlert = () => {
    const showAlert = async (type: number) => {
        if (type === 1) {
            Swal.fire({
                title: 'Saved succesfully',
                padding: '2em',
            });
        } else if (type === 2) {
            Swal.fire({
                icon: 'success',
                title: 'Good job!',
                text: 'You clicked the!',
                padding: '2em',
            });
        } else if (type === 3) {
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
        
                        });
                    } catch {
                        Swal.fire({
                            icon: 'error',
                            title: 'Unable to get your public IP',
        
                        });
                    }
                },
            });
        } else if (type === 4) {
            Swal.fire({
                icon: 'question',
                title: 'The Internet?',
                text: 'That thing is still around?',
                padding: '2em',
            });
        } else if (type === 5) {
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
                padding: '2em',
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
                    padding: '2em',
                    html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',
                    confirmButtonText: 'Lovely!',

                });
            }
        } else if (type === 6) {
            Swal.fire({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: '/images/person.gif',
                imageWidth: 224,
                imageHeight: 'auto',
                imageAlt: 'Custom image',
                padding: '2em',
            });
        } else if (type === 7) {
            Swal.fire({
                icon: 'warning',
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonText: 'Delete',
                padding: '2em',
            }).then((result) => {
                if (result.value) {
                    Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success',});
                }
            });
        } else if (type === 8) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-secondary',
                    cancelButton: 'btn btn-dark ltr:mr-3 rtl:ml-3',
                    popup: 'sweet-alerts',
                },
                buttonsStyling: false,
            });
            swalWithBootstrapButtons
                .fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true,
                    padding: '2em',
                })
                .then((result) => {
                    if (result.value) {
                        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                    }
                });
        } else if (type === 9) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="javascript:;">Why do I have this issue?</a>',
                padding: '2em',
            });
        } else if (type === 10) {
            const toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: 'success',
                title: 'Signed in successfully',
                padding: '10px 20px',
            });
        }
    };

    return (
        <div>SweetAlert</div>
    )
}

export default SweetAlert