let donations = []

export const donationStore = {
    initialize(initialDonations = []) {
        donations = [...initialDonations]
    },

    get() {
        return [...donations]
    }
}