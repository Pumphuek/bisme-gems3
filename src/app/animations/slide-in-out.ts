import { trigger, state, animate, transition, style, query, animateChild, group } from '@angular/animations';

export function slideInOut() {
    return slide();
}

function slide() {
    return trigger('slide', [
        state('void', style({position:'absolute', width:'100%'}) ),
        state('*', style({position:'absolute', width:'100%'}) ),
        transition('void => *', [
            style({transform: 'translateY(100%)', opacity: 0 }),
            animate('300ms ease-in-out', style({transform: 'translateY(0%)', opacity: 1 }))
        ]),
        transition('* => void', [
            style({transform: 'translateY(0%)', opacity: 1 }),
            animate('300ms ease-in-out', style({transform: 'translateY(100%)', opacity: 0 }))
        ])
    ]);
}