﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace backend.Types
{
    public class User : BaseType
    {
        [Key]
        [NotNull]
        [Column("id")]
        public int Id { get; set; }

        [NotNull]
        [Column("name")]
        public string Name { get; set; }

        [NotNull]
        [Column("email")]
        public string Email { get; set; }
    }
}
