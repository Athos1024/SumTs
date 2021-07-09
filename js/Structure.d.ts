declare namespace structure {
}
declare namespace structure {
}
declare namespace structure {
    class Node<T> {
        element: T;
        next: Node<T> | null;
        constructor(element: T);
    }
    class DoublyNode<T> {
        prev: DoublyNode<T>;
        next: DoublyNode<T>;
        element: T;
        constructor(element: T);
    }
    function defaultEquals(a: any, b: any): boolean;
    class TreeNode<T> {
        left: TreeNode<T>;
        right: TreeNode<T>;
        key: T;
        constructor(element: T);
    }
    class RBNode<T> extends TreeNode<T> {
        parent: RBNode<T>;
        left: RBNode<T>;
        right: RBNode<T>;
        color: number;
        constructor(element: T);
        isRed(): boolean;
    }
    const enum ColorType {
        Red = 0,
        Black = 1
    }
}
declare namespace structure {
}
declare namespace structure {
}
declare namespace structure {
}
declare namespace structure {
}
declare namespace structure {
}
declare namespace structure {
}
declare namespace structure {
    function quickSort(arr: number[]): number[];
}
declare namespace sort {
}
declare namespace sort {
}
declare namespace sort {
}
declare namespace sort {
}
declare namespace sort {
}
declare namespace sort {
}
//# sourceMappingURL=Structure.d.ts.map