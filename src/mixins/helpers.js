export const formatPrice = function (price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}