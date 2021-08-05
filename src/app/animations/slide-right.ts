import { trigger, state, animate, transition, style, query, animateChild, group } from '@angular/animations';

export function slideRight() {
    return slide();
}

function slide() {
    return trigger('slideRight', [
        transition('void => *', [
            style({transform: 'translateX(100%)', opacity: 0 }),
            animate('200ms ease-in-out', style({transform: 'translateX(0%)', opacity: 1 }))
        ]),
        transition('* => void', [
            style({transform: 'translateX(0%)', opacity: 1 }),
            animate('200ms ease-in-out', style({transform: 'translateX(100%)', opacity: 0 }))
        ])
    ]);
}